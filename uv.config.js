self.__uv$config = {
    prefix: './service/', // Added dot here
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.handler.js',
    bundle: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.bundle.js',
    config: './uv.config.js', // Added dot here
    sw: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.sw.js'
};
