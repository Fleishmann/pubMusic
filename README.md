# Bot Musica Public House

Para funcionar apos a clonagem adicione on documento com o nome .env

Apos isso dentro dele coloque o token desse modo BOT_TOKEN=token aqui

Insira uma pasta com o nome lava link, dentro dela coloque o Lavalink.jar q será executado e application.yml
dentro do application.yml coloque

server: # REST and WS server
  port: 2333
  address: 127.0.0.1

lavalink:
  server:
    password: "lavalink1234"
    playerUpdateInterval: 5 # How frequently to send player updates to clients, in seconds
    statsTaskInterval: 60 # How frequently to send the node stats to clients, in seconds
    koe:
      useEpoll: true
      highPacketPriority: true
      bufferDurationMs: 400
      byteBufAllocator: "default"
    sources:
      youtube: true
      bandcamp: true
      soundcloud: true
      twitch: true
      vimeo: true
      http: true
      local: false
    lavaplayer:
      nonAllocating: false # Whether to use the non-allocating frame buffer.
      frameBufferDuration: 5000 # The frame buffer duration, in milliseconds
      youtubePlaylistLoadLimit: 6 # Number of pages at 100 each
      gc-warnings: true
      youtubeSearchEnabled: true
      soundcloudSearchEnabled: true
      #ratelimit:
        #ipBlocks: ["1.0.0.0/8", "..."] # list of ip blocks
        #excludedIps: ["...", "..."] # ips which should be explicit excluded from usage by lavalink
        #strategy: "RotateOnBan" # RotateOnBan | LoadBalance | NanoSwitch | RotatingNanoSwitch
        #searchTriggersFail: true # Whether a search 429 should trigger marking the ip as failing
        #retryLimit: -1 # -1 = use default lavaplayer value | 0 = infinity | >0 = retry will happen this numbers times

metrics:
  prometheus:
    enabled: false
    endpoint: /metrics

sentry:
  dsn: ""
  environment: ""
#  tags:
#    some_key: some_value
#    another_key: another_value

logging:
  file:
    path: ./logs/
  logback:
    rollingpolicy:
      max-file-size: 1GB
      max-history: 30

  level:
    root: INFO
    lavalink: INFO

    Abra o terminal e execute npm install