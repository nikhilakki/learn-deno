import Hosts from "https://deno.land/x/deno_hosts@v1.0.0/mod.ts";

export default function getHostname(): object[] {
  const hostsPath = "/etc/hosts"; // Hosts file path
  const hosts = new Hosts(Deno.readTextFileSync(hostsPath));
  const hostname: object[] = hosts.toObject();
  return hostname;
}
