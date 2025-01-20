import type { Route } from "./+types/team";

export async function loader({ params }: Route.LoaderArgs) {   
    let teamId = params.teamId
    return {id: teamId}
}

export default function Component({
    loaderData,
  }: Route.ComponentProps) {
    return <h1>{loaderData.id}</h1>;
  }