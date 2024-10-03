import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
    const [urlImage, setUrlImage] = useState("");

    function aoMudarArquivo(event: ChangeEvent<HTMLInputElement>): void {
        const arquivos = event.target.files;
        if (arquivos) {
            const url = URL.createObjectURL(arquivos[0]);
            setUrlImage(url);
        }
    }

    return (
        <div className="container">
            <form className="row">
                <h3>Demo de Upload</h3>
                <label htmlFor="arquivos">Selecione uma imagem</label>
                <input
                    type="file"
                    id="arquivos"
                    className="form-control"
                    onChange={aoMudarArquivo}
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
