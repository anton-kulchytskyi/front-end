import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TestState {
  testString: string;
}

export const DEFAULT_TEST_STRING = 'Hello from Redux Toolkit!';

const initialState: TestState = {
  testString: DEFAULT_TEST_STRING,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTestString: (state, action: PayloadAction<string>) => {
      state.testString = action.payload;
    },
    clearTestString: (state) => {
      state.testString = DEFAULT_TEST_STRING;
    },
  },
});

export const { setTestString, clearTestString } = testSlice.actions;

export default testSlice.reducer;
