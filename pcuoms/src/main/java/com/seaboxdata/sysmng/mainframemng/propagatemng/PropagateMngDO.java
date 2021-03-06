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
package com.seaboxdata.sysmng.mainframemng.propagatemng;

import java.util.Date;


/**
 * sys_sign_info数据对象
 */
public class PropagateMngDO implements java.io.Serializable {
	
    private static final long serialVersionUID = 1L;

    public PropagateMngDO(){}

    public PropagateMngDO(PropagateMngDO u){
        setPropagate_id(u.getPropagate_id());
        setModule_id(u.getModule_id());
        setIndex_title(u.getIndex_title());
        setIndex_content(u.getIndex_content());
        setImg_path(u.getImg_path());
        setIndex_state(u.getIndex_state());
        setIndex_tag(u.getIndex_tag());
        setPub_state(u.getPub_state());
        setOrder_by(u.getOrder_by());
        setCre_time(u.getCre_time());
        setUpd_time(u.getUpd_time());

    }

    private Integer  propagate_id;
    /**
     *模块ID
     */
    private Integer  module_id;
    /**
     *标题
     */
    private String  index_title;

    /**
     *内容
     */
    private String  index_content;

    /*
     *路径
     */
    private String  img_path;


    private String  index_tag;

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

    public Integer getModule_id() {
        return module_id;
    }

    public void setModule_id(Integer module_id) {
        this.module_id = module_id;
    }


    public Integer getPub_state() {
        return pub_state;
    }

    public void setPub_state(Integer pub_state) {
        this.pub_state = pub_state;
    }

    public Integer getPropagate_id() {
        return propagate_id;
    }

    public void setPropagate_id(Integer propagate_id) {
        this.propagate_id = propagate_id;
    }

    public String getIndex_title() {
        return index_title;
    }

    public void setIndex_title(String index_title) {
        this.index_title = index_title;
    }

    public String getIndex_content() {
        return index_content;
    }

    public void setIndex_content(String index_content) {
        this.index_content = index_content;
    }

    public String getImg_path() {
        return img_path;
    }

    public void setImg_path(String img_path) {
        this.img_path = img_path;
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

    public String getIndex_tag() {
        return index_tag;
    }

    public void setIndex_tag(String index_tag) {
        this.index_tag = index_tag;
    }
}