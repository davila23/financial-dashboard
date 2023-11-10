import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FinancialData } from '../model/FinancialData';
import { financialMockData } from '../data/financialMockData'; 

interface FinancialState {
    data: FinancialData;
}

const initialState: FinancialState = {
    data: financialMockData, 
};

const financialSlice = createSlice({
    name: 'financial',
    initialState,
    reducers: {
        setFinancialData(state, action: PayloadAction<FinancialData>) {
            state.data = action.payload;
        },
    },
});

export const { setFinancialData } = financialSlice.actions;
export default financialSlice.reducer;
