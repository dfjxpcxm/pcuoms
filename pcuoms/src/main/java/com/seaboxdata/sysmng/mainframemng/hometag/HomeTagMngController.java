/**
 * <h3>标题 : potal统一门户-sys_user </h3>
 * <h3>描述 : sys_user请求类</h3>
 * <h3>日期 : 2018-04-13</h3>
 * <h3>版权 : Copyright (C) 北京东方金信科技有限公司</h3>
 *
 * <p>
 *
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


import com.seaboxdata.core.base.ISysBaseService;
import com.seaboxdata.core.base.SysBaseController;
import com.seaboxdata.core.base.model.DataStore;
import com.seaboxdata.core.util.FileUtil;
import com.seaboxdata.sysmng.ModuleInfoConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * sys_user请求类
 *
 * @author 你自己的姓名
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/homeTagMng")
public class HomeTagMngController extends SysBaseController<HomeTagMngDO> {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Resource(name = "homeTagMngService")
    private IHomeTagMngService homeTagMngService;

    @Override
    public ISysBaseService<HomeTagMngDO> getBaseService() {
        return homeTagMngService;
    }

    @RequestMapping
    public String list(ModelMap model) {
        return "page/hometag/list";
    }

    @RequestMapping
    public String edit(ModelMap model) {
        return "page/hometag/edit";
    }

    @RequestMapping(value ="/getModuleInfo")
    @ResponseBody
    public List<Map<String,Object>> getApp(){
        return homeTagMngService.getModuleInfo();
    }

    @RequestMapping(value ="/pubHomeTagInfo")
    @ResponseBody
    public DataStore pubHomeTagInfo(@RequestParam String  tag_id,@RequestParam String  pub_state) {
        homeTagMngService.pubHomeTagInfoById(tag_id,pub_state);
        DataStore  ds =  new DataStore ();
        return ds.setOk("操作成功");
    }

    @Override
    public DataStore save(HomeTagMngDO model) {
         ActionMsg = getBaseService().save(model);
        if (ActionMsg.isError())
            return ActionMsg;
        return ActionMsg;
    }

}