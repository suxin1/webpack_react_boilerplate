/**
 * Created by Administrator on 2017/5/17 0017.
 */
exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host, // Defaults to `localhost`
        port, // Defaults to 8080
        overlay: {
            errors: true,
            warnings: true,
        },
        // TODO set to the right host name or ip to make the web accessible by the LAN
        public: "192.168.0.104:8000"
    },
});