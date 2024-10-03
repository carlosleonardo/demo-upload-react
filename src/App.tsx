import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { UploadArquivos } from "./upload-arquivo";

function App() {
    const [urlImage, setUrlImage] = useState("");
    const [arquivoSelecionado, setArquivoSelecionado] = useState<File>();

    function aoMudarArquivo(event: ChangeEvent<HTMLInputElement>): void {
        const arquivos = event.target.files;

        if (arquivos) {
            setArquivoSelecionado(arquivos[0]);
            const url = URL.createObjectURL(arquivoSelecionado as File);
            setUrlImage(url);
        }
    }

    function aoEnviarArquivo(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        UploadArquivos.upload(
            arquivoSelecionado as File,
            "http://localhost:5022/upload"
        ).then((response) => {
            console.log(response);
            alert(`Arquivo ${arquivoSelecionado?.name} enviado com sucesso!`);
        });
    }

    return (
        <div className="container">
            <form className="row" onSubmit={aoEnviarArquivo}>
                <h3>Demo de Upload</h3>
                <label htmlFor="arquivos">Selecione uma imagem</label>
                <input
                    type="file"
                    id="arquivos"
                    className="form-control"
                    onChange={aoMudarArquivo}
                    accept="image/*"
                />
                <button type="submit" className="btn btn-primary mt-3">
                    Enviar arquivos
                </button>
                {urlImage !== "" && (
                    <img
                        src={urlImage}
                        alt="imagem"
                        style={{ maxWidth: "480px", height: "auto" }}
                    />
                )}
            </form>
        </div>
    );
}
export default App;
