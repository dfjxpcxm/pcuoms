/**
 * <h3>标题 : potal统一门户-sys_user </h3>
 * <h3>描述 : sys_user数据访问接口</h3>
 * <h3>日期 : 2018-04-13</h3>
 * <h3>版权 : Copyright (C) 北京东方金信科技有限公司</h3>
 * 
 * <p>
 * @author 你自己的姓名 mazong@seaboxdata.com
 * @version <b>v1.0.0</b>
 *          
 * <b>修改历史:</b>
 * -------------------------------------------
 * 修改人 修改日期 修改描述
 * -------------------------------------------
 *          
 *          
 * </p>
 */
package com.seaboxdata.sysmng.mainframemng.hometag;



import com.seaboxdata.core.base.ISysBaseDao;

import java.util.List;
import java.util.Map;

/**
 * 数据访问接口
 */
public interface IHomeTagMngDao<GotoPuChengMngDO> extends ISysBaseDao<GotoPuChengMngDO> {



    /*
      查询模块信息
   */
    public List<Map<String,Object>> getModuleInfo();

    /*
       发布
     */
    public void pubHomeTagInfoById(Map<String, Object> queryMap);


    /*
      获取首页宣传信息
     */
    public List<Map<String,Object>> getMainframeHomeTagInfo(Map<String, Object> queryMap);

    /*
        获取首页标签颜色
     */
    public HomeTagMngDO getColor();
}