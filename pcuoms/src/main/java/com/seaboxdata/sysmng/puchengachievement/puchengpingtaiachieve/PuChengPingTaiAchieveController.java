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
package com.seaboxdata.sysmng.puchengachievement.puchengpingtaiachieve;


import com.seaboxdata.core.base.ISysBaseService;
import com.seaboxdata.core.base.SysBaseController;
import com.seaboxdata.core.base.model.DataStore;
import com.seaboxdata.core.util.FileUtil;
import com.seaboxdata.sysmng.ModuleInfoConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.seaboxdata.sysmng.ModuleInfoConstants;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * 品牌特色
 *
 * @author 你自己的姓名
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/puChengPingTaiAchieve")
public class PuChengPingTaiAchieveController extends SysBaseController<PuChengPingTaiAchieveDO> {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Resource(name = "puChengPingTaiAchieveService")
    private IPuChengPingTaiAchieveService puChengPingTaiAchieveService;

    @Override
    public ISysBaseService<PuChengPingTaiAchieveDO> getBaseService() {
        return puChengPingTaiAchieveService;
    }

    @RequestMapping
    public String list(ModelMap model) {
        return "page/achievement/pingtaiachieve/list";
    }

    @RequestMapping
    public String edit(ModelMap model) {
        return "page/achievement/pingtaiachieve/edit";
    }

    @Override
    public DataStore save(PuChengPingTaiAchieveDO entity) {
        String imgPath = FileUtil.getImgUploadPath(request);
        entity.setModule_id(ModuleInfoConstants.PingTaiAchieve);
        if (imgPath.length() > 0)
            entity.setImg_path(imgPath);

        ActionMsg = getBaseService().save(entity);
        if (ActionMsg.isError())
            return ActionMsg;

        return ActionMsg;
    }

    @RequestMapping(value ="/pubPingTaiAchieveInfoById")
    @ResponseBody
    public DataStore pubInfoById(@RequestParam String  achieve_id) {
        puChengPingTaiAchieveService.pubInfoById(achieve_id);
        DataStore  ds =  new DataStore ();
        return ds.setOk("操作成功");
    }
}