import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    maxMessages: 30,
    messageToDelete:20,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
      if (state.messages.length > state.maxMessages) {
        state.messages.splice(-state.messageToDelete);
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
