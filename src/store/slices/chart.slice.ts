import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { rapidAPI } from "src/app/config/axiosConfig";

export interface awardProps {
  id: number;
  awardName?: string;
  awardNominationId?: string;
  category: string;
  eventEditionId: string;
  eventId: any;
  eventName: string;
  instanceWithinYear?: number;
  isWinner?: string;
  nominations?: any;
  year?: string | number;
}

interface usersProps {
  awards: awardProps[];
  loading: boolean;
}

const initialState: usersProps = {
  awards: [],
  loading: false,
};

const chartSlice = createSlice({
  name: "chart",
  initialState: initialState,
  reducers: {
    getAwards: (state, action: PayloadAction<any>) => {
      const {
        resource: { awards },
      } = action.payload;
      state.awards = awards;
    },
  },
});

export const { getAwards } = chartSlice.actions;

export const getAwardsApi = (nconst: string) => (dispatch: Dispatch) => {
  return rapidAPI
    .get(`/actors/get-awards?nconst=${nconst}`)
    .then((response) => {
      dispatch(getAwards(response.data));
    });
};

export default chartSlice.reducer;
