import { redirect } from "next/navigation";

const TELEGRAM_LINK = "https://t.me/AllYonoGamesh"; // Apna Telegram link yahan daalo

export default function JoinTelegram() {
  redirect(TELEGRAM_LINK);
}
