import request from '../utils/request';

/**
 * 获取饼图数据
 * @param {请求参数} param 
 */
export function getPieChartData(param){
  return request(`/chart/getPieChartData`);
}