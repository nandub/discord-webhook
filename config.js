var config = {};

config.discord = {};
config.github = {};
config.web = {};

config.discord.token = process.env.DISCORD_TOKEN;
config.discord.channel_id = process.env.DISCORD_CHANNEL_ID || '211145352336769025';
config.github.token = process.env.SECRET_TOKEN;
config.web.port = process.env.PORT || 1974;
config.web.workers = process.env.WEB_CONCURRENCY || 1;

module.exports = config;
