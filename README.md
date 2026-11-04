# Bezpečnost AI: web pro publikum

Statická stránka s přehledem slidů přednášky o bezpečnosti AI, ke které se lze vrátit po akci.
Obsah se generuje z PowerPointové prezentace v samostatném pracovním projektu (plán převodu:
`work/web/PLAN.md` v něm); tento repozitář obsahuje jen hotový web.

## Stav

Repozitář je připravený na nový obsah, web zatím není vytvořen. Starý prototyp (přestávkový web
v Astro) je zachován pod tagem `archiv-prestavkovy-prototyp`.

## Struktura

- `site/` – hotový statický web (HTML, CSS, `assets/`); jediná složka, která se publikuje.
- `.github/workflows/deploy.yml` – ruční nasazení složky `site/` na GitHub Pages.

Očekávaná adresa: https://mi-char.github.io/prednaska-bezpecnost-ai/ (zatím neověřeno).
Odkazy ve webu musí být relativní, aby fungovaly v podadresáři.

## Pravidla

- Obsah `site/` se nepíše ručně, ale kopíruje se z výstupu převodu.
- Bez externích fontů, skriptů, analytiky a cookies.
- Nasazení pouze na výslovný pokyn.
