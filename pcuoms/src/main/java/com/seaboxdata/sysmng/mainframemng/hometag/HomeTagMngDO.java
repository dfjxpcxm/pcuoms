/**
 * <h3>标题 : potal统一门户-sys_user </h3>
 * <h3>描述 : sys_user数据对象</h3>
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

import java.util.Date;


/**
 * sys_sign_info数据对象
 */
public class HomeTagMngDO implements java.io.Serializable {
	
    private static final long serialVersionUID = 1L;

    public HomeTagMngDO(){}

    public HomeTagMngDO(HomeTagMngDO u){
        setTag_id(u.getTag_id());
        setTag_content(u.getTag_content());
        setIndex_state(u.getIndex_state());
        setPub_state(u.getPub_state());
        setOrder_by(u.getOrder_by());
        setCre_time(u.getCre_time());
        setUpd_time(u.getUpd_time());

    }

    private Integer  tag_id;
    /**
     *模块ID
     */
    private Integer  module_id;
    /**
     *内容
     */
    private String tag_content;


    private String tag_style;
    /**
     *状态
     */
    private Integer  index_state;
    /**
     *发布状态
     */
    private Integer pub_state;

    /**
     *排序
     */
    private Integer order_by;

    /**
     *cre_time
     */
    private Date  cre_time;


    /**
     *upd_time
     */
    private Date  upd_time;


    public Integer getTag_id() {
        return tag_id;
    }

    public void setTag_id(Integer tag_id) {
        this.tag_id = tag_id;
    }

    public Integer getModule_id() {
        return module_id;
    }

    public void setModule_id(Integer module_id) {
        this.module_id = module_id;
    }

    public String getTag_content() {
        return tag_content;
    }

    public void setTag_content(String tag_content) {
        this.tag_content = tag_content;
    }

    public Date getCre_time() {
        return cre_time;
    }

    public void setCre_time(Date cre_time) {
        this.cre_time = cre_time;
    }

    public Date getUpd_time() {
        return upd_time;
    }

    public void setUpd_time(Date upd_time) {
        this.upd_time = upd_time;
    }

    public Integer getPub_state() {
        return pub_state;
    }

    public void setPub_state(Integer pub_state) {
        this.pub_state = pub_state;
    }

    public Integer getIndex_state() {
        return index_state;
    }

    public void setIndex_state(Integer index_state) {
        this.index_state = index_state;
    }

    public Integer getOrder_by() {
        return order_by;
    }

    public void setOrder_by(Integer order_by) {
        this.order_by = order_by;
    }

    public String getTag_style() {
        return tag_style;
    }

    public void setTag_style(String tag_style) {
        this.tag_style = tag_style;
    }
}