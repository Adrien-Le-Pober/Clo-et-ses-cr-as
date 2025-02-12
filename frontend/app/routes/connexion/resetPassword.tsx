import ResetPasswordPage from "~/auth/ResetPasswordPage";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Les créas de Clo - Nouveau mot de passe" },
        { name: "description", content: "Bienvenue sur Les créas de Clo" },
    ];
}

export default function ResetPassword() {
    return (
        <ResetPasswordPage/>
    )
}