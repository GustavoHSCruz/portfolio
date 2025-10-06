/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTACT_API_URL?: string;
    // adicionar outras variáveis VITE_* aqui conforme necessário
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
