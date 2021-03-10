# JS Multilayer Parallax - Assassin

Vytvořte skript, který vytvoří animaci s paralaxním efektem. Pro lepší představu o možném výsledku doporučuji shlédnout přiložené video s názvem [ParallaxPreview.mp4](ParallaxPreview.mp4).

Doplňte styl tak, aby URL obrázků vhodně odpovídaly očekávaným vrstvám:
``.layer-background { background-image: url(...); }``

Na událost ``onscroll`` objektu ``window``, navažte funkci, která na základě aktuální polohy vertikálního scrollbaru vhodným způsobem animuje jednotlivé elementy s třídou ``parallax-layer``. Pro změnu polohy použijte **CSS vlastnost** ``transform``, konkrétně je vhodné měnit ``translateY()`` a případně ``translateX()``.

Můžete programovat vlastními prostředky, nebo se pokusit o vhodnou implementaci některé z funkcí [scrollMagicu](https://scrollmagic.io/examples/advanced/parallax_sections.html)

## Live code
Zde bude odkaz na index soubor tohoto webu - zpřístupnění se dělá v *Settings* - *GitHub Pages*.

Dále je třeba upravit URL - za *YOURLOGINNAME* doplnit vaše loginname v GitHubu.

[Odkaz na tuto stránku "živě"](https://pslib-cz.github.io/2020p2web-js-parallax-assassin-YOURLOGINNAME/index.html)

## Syntaktické poznámky
Změna vlastnosti transform CSS stylu HTML elementu
````
    element.style.transform = "translateY(-150px) translateX(+80px)"
````
