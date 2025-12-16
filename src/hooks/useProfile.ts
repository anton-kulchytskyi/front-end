import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type FetcherFunction<T> = (id: number) => Promise<T | null>;

interface ProfileState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useProfile = <T>(fetcher: FetcherFunction<T>): ProfileState<T> => {
  const { id } = useParams<{ id: string }>();
  const itemId = Number(id);
  const isInvalidId = !id || isNaN(itemId);

  const [state, setState] = useState<ProfileState<T>>({
    data: null,
    isLoading: isInvalidId ? false : true,
    error: isInvalidId ? 'Invalid ID provided.' : null,
  });

  useEffect(() => {
    if (isInvalidId) {
      return;
    }

    if (!state.isLoading && state.error === 'Invalid ID provided.') {
      return;
    }

    const fetchData = async () => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));
      try {
        const result = await fetcher(itemId);
        setState({ data: result, isLoading: false, error: null });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setState({
          data: null,
          isLoading: false,
          error: 'Failed to fetch data.',
        });
      }
    };

    fetchData();
  }, [id, itemId, isInvalidId, fetcher, state.error, state.isLoading]);

  return state;
};
