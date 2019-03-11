package com.seaboxdata.core.util;

import java.io.*;

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
}
