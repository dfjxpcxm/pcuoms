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
package com.seaboxdata.sysmng.gotopuchengmng.puchengsummarize;


import com.seaboxdata.core.base.ISysBaseService;
import com.seaboxdata.core.base.SysBaseController;
import com.seaboxdata.core.base.model.DataStore;
import com.seaboxdata.core.util.common.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 浦城概述
 *
 * @author 你自己的姓名
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/puChenSummarize")
public class PuChengSummarizeController extends SysBaseController<PuChengSummarizeDO> {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Resource(name = "puChenSummarizeService")
    private IPuChengSummarizeService puChenSummarizeService;

    @Override
    public ISysBaseService<PuChengSummarizeDO> getBaseService() {
        return puChenSummarizeService;
    }

    @RequestMapping
    public String list(ModelMap model) {
        return "page/gotopc/summarize/list";
    }

    @RequestMapping
    public String edit(ModelMap model) {
        return "page/gotopc/summarize/edit";
    }




}