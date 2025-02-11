import {dashboardData} from "./dashboard-data";
import {KillKane} from "./features/kill-kane";
import {KillKaneAction} from "./actions/Killkane";

/**
 * @type ConfigType
 */
export const config = {
    name: "Dishub",
    footer: [
        {
            name: {zh: "支持", en: "Support"},
            url: "https://github.com/SonMooSans"
        }
    ],
    settings: detail => [
        {
            id: "say",
            name: "Test",
            type: "string",
            value: detail["say"]
        }
    ],
    actions: {
        "kill_kane": KillKaneAction
    },
    features: {
        "auto_kill_kane": KillKane
    },
    tutorialUrl: "https://github.com/SonMooSans/discord-bot-dashboard",
    serverUrl: "https://discord-bot-dashboard-ashy.vercel.app/",
    inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1053026144930238484&permissions=8&scope=bot",
    data: {
        dashboard: dashboardData,
    },
}
