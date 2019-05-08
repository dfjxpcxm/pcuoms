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
package com.seaboxdata.sysmng.gotopuchengmng;


import com.seaboxdata.core.base.BaseController;
import com.seaboxdata.core.base.ISysBaseService;
import com.seaboxdata.core.base.SysBaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import com.seaboxdata.core.base.BaseController;
import org.springframework.web.bind.annotation.ResponseBody;
import com.seaboxdata.sysmng.gotopuchengmng.GotoPuChengMngDO;

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
@RequestMapping(value = "/gotoPuChengMng")
public class GotoPuChengMngController extends SysBaseController<GotoPuChengMngDO> {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Resource(name = "gotoPuChengMngService")
    private IGotoPuChengMngService gotoPuChengMngService;

    @Override
    public ISysBaseService<GotoPuChengMngDO> getBaseService() {
        return gotoPuChengMngService;
    }



    @RequestMapping
    public String list(ModelMap model) {
        return "page/gotopc/list";
    }

    /*
     * 大美浦城
     */
    @RequestMapping(value = "/gotoBeautifulPC")
    public String gotoBeautifulPC(ModelMap model) {
        List<Map<String, Object>> retList = gotoPuChengMngService.getBeautifulPCInfo();
        model.addAttribute("data", retList);
        return "page/dmpc/beautifulpc";
    }

    /*
     * 活力浦城
     */
    @RequestMapping(value = "/gotoLivingPC")
    public String gotoLivingPC(ModelMap model) {
        return "page/dmpc/livingpc";
    }


    @RequestMapping
    public String edit(ModelMap model) {
        return "page/gotopc/mainframe";
    }





}