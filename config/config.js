const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env) {
        case 'dev':
        return {
            bd_string: 'mongodb+srv://usuario_admin:h6b10b6905h9j@clusterapi-wvdgy.mongodb.net/test?retryWrites=true',
            jwt_pass: 'suporte2019',
            jwt_expires_in: '7d'
        }

        case 'hml':
        return {
            bd_string: 'mongodb+srv://usuario_admin:h6b10b6905h9j@clusterapi-wvdgy.mongodb.net/test?retryWrites=true'
        }

        case 'prod':
        return {
            bd_string: 'mongodb+srv://usuario_admin:h6b10b6905h9j@clusterapi-wvdgy.mongodb.net/test?retryWrites=true'
        }

    }
}

console.log(`Inciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();