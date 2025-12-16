import { Box, TextField, Button, Stack } from '@mui/material';
import { useAppDispatch } from '@store/hooks';
import { setTestString, clearTestString } from '@store/slices/testSlice';
import { useState } from 'react';

export const StateControls = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleUpdate = () => {
    if (inputValue.trim()) {
      dispatch(setTestString(inputValue));
      setInputValue('');
    }
  };

  const handleClear = () => {
    dispatch(clearTestString());
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <TextField
          fullWidth
          label="Enter new value"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          disabled={!inputValue.trim()}
        >
          Update
        </Button>
      </Stack>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClear}
        fullWidth
      >
        Clear State
      </Button>
    </Box>
  );
};
