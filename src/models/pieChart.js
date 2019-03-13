import request from '../utils/request';
export default   {
  namespace:'pieChart',
  state:{
    cardLlist:[],
    statistic:{},
    data:{}
  },
  effects: {
    *getStatistic({ _ },{ call, put }) {

      const rsp = fetch('/chart/getPieChartData')
      yield put({
        type: 'saveStatistic',
        payload: {  
          data: rsp.result,
        },
      });
    },
  },

  reducers: {
    saveStatistic(state, { payload: {data } }) {
      return {
        ...state,
        data,
      }
    },
  },
}