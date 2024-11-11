import { HTTPClient } from "./client";

const UsuarioAPI = {
    async obterAsync(usuarioid) {
        try {
            const response = await HTTPClient.get(`/Usuario/Obter/${usuarioid}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao obter usuario", error);
            throw error;
        }
    },

    async listarAsync(ativos) {
        try {
            const response = await HTTPClient.get(`/Usuario/Listar?ativos=${ativos}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao listar usuario", error);
            throw error;
        }
    },

    async listarTiposUsuarioAsync() {
        try {
            const response = await HTTPClient.get(`/Usuario/ListarTipoUsuario`);
            return response.data;
        } catch (error) {
            console.error("Erro ao listar os tipos de usuario", error);
            throw error;
        }
    },


    async criarAsync(nome, email, senha, tipoUsuarioId) {
        try {
            const usuarioCriar = {
                TipoUsuarioId: tipoUsuarioId,
                Nome: nome,
                Email: email,
                Senha: senha
            };
            const response = await HTTPClient.post(`/Usuario/Criar`, usuarioCriar);
            return response.data;
        } catch (error) {
            console.error("Erro ao criar usuario", error);
            throw error;
        }
    },
    async atualizarAsync(id, nome, email,tipoUsuarioId ) {
        try {
            const tipoUsuarioIdConvertido = parseInt(tipoUsuarioId)
            const usuarioAtualizar = {
                TipoUsuarioId: tipoUsuarioIdConvertido,
                Nome: nome,
                Email: email,
                Id: id
            };
            const response = await HTTPClient.put(`https://localhost:7006/Usuario/Atualizar`, usuarioAtualizar);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar usuario", error);
            throw error;
        }
    },
    async deletarAsync(usuarioid ) {
        try {
      
            const response = await HTTPClient.delete(`/Usuario/Deletar/${usuarioid}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao deletar usuario", error);
            throw error;
        }
    },
    async alterarSenhaAsync(id, senha, semhaAntiga ) {
        try {
            const usuarioAlterarSenha = {
                Id: id,
                Senha: senha,
                SenhaAntiga: semhaAntiga
            };
            const response = await HTTPClient.post(`/Usuario/AlterarSenha`, usuarioAlterarSenha);
            return response.data;
        } catch (error) {
            console.error("Erro ao alterar senha do  usuario", error);
            throw error;
        }
    },
    async restaurarAsync(usuarioid ) {
        try {
         
            const response = await HTTPClient.put(`/Usuario/AlterarSenha${usuarioid}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao restaurar usuario", error);
            throw error;
        }
    },

}

export default UsuarioAPI;

