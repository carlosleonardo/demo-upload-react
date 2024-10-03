import axios from "axios";

export class UploadArquivos {
    public static upload(arquivo: File, url: string): Promise<any> {
        const formData = new FormData();
        formData.append("file", arquivo);
        return axios({
            method: "post",
            url,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
    }
}
