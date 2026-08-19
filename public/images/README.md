# Images à fournir — page d'accueil IdéalTP

Déposer les fichiers **dans ce dossier**, avec **exactement ces noms** (en minuscules).
Format : `.jpg` (ou `.webp`, en changeant l'extension dans `src/lib/site.ts`).
Poids conseillé : < 500 Ko par image (Next.js optimise ensuite automatiquement).

| Fichier | Dimensions mini | Cadrage | Contenu attendu |
|---|---|---|---|
| `hero.jpg` | 2400 × 1350 (16:9) | Paysage | Photo d'accroche plein écran : équipe en levé topographique / station totale sur chantier. **Prévoir une zone calme à gauche** : le titre s'y superpose. |
| `apropos-hero.jpg` | 2400 × 1350 (16:9) | Paysage | Hero de la page À propos : vue d’équipe ou de chantier emblématique IdéalTP. **Prévoir une zone calme à gauche** pour le titre. |
| `apropos.jpg` | 1200 × 1400 (portrait) | Vertical | Technicien IdéalTP en action, gros plan sur le matériel ou l'équipe. |
| `service-topographie.jpg` | 1200 × 900 (4:3) | Paysage | Levé de terrain, station totale, GPS/GNSS. |
| `service-lotissement.jpg` | 1200 × 900 (4:3) | Paysage | Bornage, parcelles, plan de lotissement, bornes posées. |
| `service-implantation.jpg` | 1200 × 900 (4:3) | Paysage | Implantation de bâtiment, piquetage, axes tracés. |
| `service-travaux-publics.jpg` | 1200 × 900 (4:3) | Paysage | Engins, terrassement, voirie. |

## Réalisations

Nouvelle arborescence : un dossier par chantier dans `public/images/realisations/`.
La couverture est utilisée sur les cartes et le hero de la fiche. Les photos `01.jpg` à
`05.jpg` alimentent la galerie de la fiche.

### Lotissement résidentiel de Khorira

| Fichier | Dimensions | Cadrage | Contenu attendu |
|---|---:|---|---|
| `realisations/lotissement-khorira/cover.jpg` | 2000 × 1125 (16:9) | Paysage large | Vue générale du lotissement ou du terrain découpé, lisible en carte et en hero. |
| `realisations/lotissement-khorira/01.jpg` | 1600 × 1200 (4:3) | Paysage | Équipe au levé topographique sur le terrain. |
| `realisations/lotissement-khorira/02.jpg` | 1600 × 1200 (4:3) | Paysage | Bornes posées ou repères de limites matérialisés. |
| `realisations/lotissement-khorira/03.jpg` | 1600 × 1200 (4:3) | Paysage | Voie ou emprise principale du plan de masse. |
| `realisations/lotissement-khorira/04.jpg` | 1600 × 1200 (4:3) | Paysage | Contrôle terrain avec station totale ou GNSS. |
| `realisations/lotissement-khorira/05.jpg` | 1600 × 1200 (4:3) | Paysage | Vue de parcelles matérialisées ou remise terrain. |

### Levé topographique de site industriel

| Fichier | Dimensions | Cadrage | Contenu attendu |
|---|---:|---|---|
| `realisations/leve-topographique-kagbelen/cover.jpg` | 2000 × 1125 (16:9) | Paysage large | Vue du site industriel ou de la plateforme à relever. |
| `realisations/leve-topographique-kagbelen/01.jpg` | 1600 × 1200 (4:3) | Paysage | Levé GNSS sur point de contrôle. |
| `realisations/leve-topographique-kagbelen/02.jpg` | 1600 × 1200 (4:3) | Paysage | Station totale orientée vers les ruptures de pente. |
| `realisations/leve-topographique-kagbelen/03.jpg` | 1600 × 1200 (4:3) | Paysage | Ouvrage existant, accès ou point bas relevé. |
| `realisations/leve-topographique-kagbelen/04.jpg` | 1600 × 1200 (4:3) | Paysage | Vue d’ensemble utile aux courbes de niveau et profils. |

### Implantation d’un ensemble de bâtiments

| Fichier | Dimensions | Cadrage | Contenu attendu |
|---|---:|---|---|
| `realisations/implantation-batiment-conakry/cover.jpg` | 2000 × 1125 (16:9) | Paysage large | Chantier bâtiment avec axes ou repères visibles. |
| `realisations/implantation-batiment-conakry/01.jpg` | 1600 × 1200 (4:3) | Paysage | Piquetage des axes principaux. |
| `realisations/implantation-batiment-conakry/02.jpg` | 1600 × 1200 (4:3) | Paysage | Contrôle de niveau ou de fond de fouille. |
| `realisations/implantation-batiment-conakry/03.jpg` | 1600 × 1200 (4:3) | Paysage | Repères matérialisés avant intervention gros œuvre. |

### Terrassement et voirie d’accès

| Fichier | Dimensions | Cadrage | Contenu attendu |
|---|---:|---|---|
| `realisations/terrassement-voirie-dubreka/cover.jpg` | 2000 × 1125 (16:9) | Paysage large | Engin ou plateforme de terrassement avec lecture claire du chantier. |
| `realisations/terrassement-voirie-dubreka/01.jpg` | 1600 × 1200 (4:3) | Paysage | Terrain naturel avant terrassement ou début de piste. |
| `realisations/terrassement-voirie-dubreka/02.jpg` | 1600 × 1200 (4:3) | Paysage | Contrôle des niveaux pendant l’exécution. |
| `realisations/terrassement-voirie-dubreka/03.jpg` | 1600 × 1200 (4:3) | Paysage | Déblais, remblais ou compactage de plateforme. |
| `realisations/terrassement-voirie-dubreka/04.jpg` | 1600 × 1200 (4:3) | Paysage | Voirie d’accès après mise en forme. |

### Bornage et régularisation de parcelles

| Fichier | Dimensions | Cadrage | Contenu attendu |
|---|---:|---|---|
| `realisations/bornage-parcelles-coyah/cover.jpg` | 2000 × 1125 (16:9) | Paysage large | Parcelles ou limites matérialisées sur le terrain. |
| `realisations/bornage-parcelles-coyah/01.jpg` | 1600 × 1200 (4:3) | Paysage | Vérification de limite avec instrument topographique. |
| `realisations/bornage-parcelles-coyah/02.jpg` | 1600 × 1200 (4:3) | Paysage | Borne, repère ou clôture proche des limites. |
| `realisations/bornage-parcelles-coyah/03.jpg` | 1600 × 1200 (4:3) | Paysage | Vue du terrain après matérialisation des parcelles. |

## Également nécessaires (hors de ce dossier)

| Fichier | Emplacement | Dimensions | Usage |
|---|---|---|---|
| `logo.svg` (ou `.png` fond transparent) | `public/` | vectoriel / 1000 px de large | Logo officiel IdéalTP. Le header utilise aujourd'hui un logo provisoire dessiné en code (`src/components/Logo.tsx`). |
| `favicon.ico` + `icon.png` | `src/app/` | 32×32 et 512×512 | Icône d'onglet et d'écran d'accueil. |
| `opengraph-image.jpg` | `src/app/` | 1200 × 630 | Aperçu lors des partages WhatsApp / Facebook. |

## Notes

- Les titres, catégories, lieux et années de chaque réalisation se modifient dans `src/lib/site.ts`
  (tableau `realisations`) — ils seront pilotés par le back-office dans un second temps.
- Chaque image a un texte alternatif généré à partir du titre : garder des titres descriptifs.
- Photos en **paysage horizontal**, nettes, prises de jour. Éviter les captures d'écran
  et les photos recadrées depuis WhatsApp (trop compressées).
