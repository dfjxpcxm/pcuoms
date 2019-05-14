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
package com.seaboxdata.sysmng.puchengachievement.puchengindustsumm;


import com.seaboxdata.core.base.ISysBaseService;
import com.seaboxdata.core.base.SysBaseController;
import com.seaboxdata.core.base.model.DataStore;
import com.seaboxdata.core.util.FileUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

/**
 * 品牌特色
 *
 * @author 你自己的姓名
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/puChengIndustSumm")
public class PuChengIndustSummController extends SysBaseController<PuChengIndustSummDO> {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Resource(name = "puChengIndustSummService")
    private IPuChengIndustSummService puChengIndustSummService;

    @Override
    public ISysBaseService<PuChengIndustSummDO> getBaseService() {
        return puChengIndustSummService;
    }

    @RequestMapping
    public String list(ModelMap model) {
        return "page/achievement/industsumm/list";
    }

    @RequestMapping
    public String edit(ModelMap model) {
        return "page/achievement/industsumm/edit";
    }

    @Override
    public DataStore save(PuChengIndustSummDO entity) {
        String imgPath = FileUtil.getImgUploadPath(request);
        if (imgPath.length() > 0)
            entity.setImg_path(imgPath);
        ActionMsg = getBaseService().save(entity);
        if (ActionMsg.isError())
            return ActionMsg;

        return ActionMsg;
    }
}