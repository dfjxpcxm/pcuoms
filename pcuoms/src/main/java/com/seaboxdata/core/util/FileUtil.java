package com.seaboxdata.core.util;

import com.seaboxdata.core.util.common.PropertiesUtil;
import com.seaboxdata.core.util.common.QCommon;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.Iterator;

/**
 * 文件辅助类
 */
public class FileUtil {
    /**
     * 从文件中读取文本内容
     *
     * @param file
     *            目标文件
     * @param encoding
     *            目标文件的文本编码格式
     * @return
     * @throws IOException
     */
    public static String loadStringFromFile(File file, String encoding)
            throws IOException {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new InputStreamReader(
                    new FileInputStream(file), encoding));
            StringBuilder builder = new StringBuilder();
            char[] chars = new char[4096];

            int length = 0;

            while (0 < (length = reader.read(chars))) {

                builder.append(chars, 0, length);

            }

            return builder.toString();

        } finally {

            try {

                if (reader != null)
                    reader.close();

            } catch (IOException e) {

                throw new RuntimeException(e);

            }

        }

    }



    public static String getImgUploadPath(HttpServletRequest request) {
        //将request变成多部分request
        MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
        //创建文件夹
 //       String baseDir = PropertiesUtil.getPropery("file.dir");
        String baseDir  = request.getSession().getServletContext().getRealPath("/static/upload/");
        File dirPath = new File(baseDir + SRC_UPLOAD_PATH);

        if (!dirPath.exists()) {
            dirPath.mkdirs();
        }
        //获取multiRequest 中所有的文件名
        Iterator iter = multiRequest.getFileNames();
        try {
            while (iter.hasNext()) {
                //一次遍历所有文件
                MultipartFile file = multiRequest.getFile(iter.next().toString());
                if (file != null) {
                    //上传
                    // 获取文件名后缀
                    String oldname = file.getOriginalFilename();
                    String suffix = oldname.indexOf(".") != -1 ? oldname.substring(oldname.lastIndexOf(".")) : "";
                    String fname = QCommon.getUUID() + suffix;
///                    String fname = oldname;
                    File uploadFile = new File(dirPath + File.separator + fname);
                    FileCopyUtils.copy(file.getBytes(), uploadFile);
                    String url = TARGE_UPLOAD_PATH + fname;
                    return url;
                }
            }
        } catch (Exception e) {
            System.out.print("[getImgUploadPath]无法保存上传文件:" + e.getMessage());
            e.printStackTrace();
        }
        return "";
    }




//    private final static String TARGE_UPLOAD_PATH = "upload/files/pc/";
    private final static String TARGE_UPLOAD_PATH = "/pcuoms/static/upload/201904/";

    private final static String SRC_UPLOAD_PATH = "/201904/";
}
