/**
 * Изтегля основното съдържание (div.nopad) от страниците под меню „Община Пещера“
 * на www.peshtera.bg и записва src/data/municipalityMirror.json
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../src/data/municipalityMirror.json');
const BASE = 'https://www.peshtera.bg';

/** Път в приложението → пълен URL на Joomla */
const PATH_TO_URL = {
  '/razdel/obshtina-peshtera': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=25&Itemid=3`,
  '/razdel/spravochna-informatsiya': `${BASE}/index.php?option=com_content&view=category&id=1&Itemid=97`,
  '/razdel/mestopolozhenie': `${BASE}/index.php?option=com_content&view=article&id=2&Itemid=92`,
  '/razdel/istoriya': `${BASE}/index.php?option=com_content&view=article&id=85&Itemid=93`,
  '/razdel/kultura': `${BASE}/index.php?option=com_content&view=article&id=86&Itemid=94`,
  '/razdel/obrazovanie': `${BASE}/index.php?option=com_content&view=article&id=87&Itemid=95`,
  '/razdel/turizam': `${BASE}/index.php?option=com_content&view=article&id=88&Itemid=96`,
  '/razdel/targove-konkursi': `${BASE}/index2.php?option=com_content&view=category&id=143&Itemid=268`,
  '/razdel/strategicheski-dokumenti': `${BASE}/index.php?option=com_content&view=category&id=111&Itemid=98`,
  '/razdel/obshtinski-planove': `${BASE}/index.php?option=com_content&view=article&id=950&Itemid=99`,
  '/razdel/obshtinski-strategii': `${BASE}/index.php?option=com_content&view=article&id=951&Itemid=100`,
  '/razdel/obshtinski-programi': `${BASE}/index.php?option=com_content&view=article&id=952&Itemid=101`,
  '/razdel/obshtinski-byudzhet': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=24&Itemid=102`,
  '/razdel/polezno': `${BASE}/index.php?option=com_weblinks&view=categories&Itemid=105`,
  '/razdel/polezni-vrazki': `${BASE}/index.php?option=com_weblinks&view=categories&Itemid=105`,
  '/razdel/polezni-vrazki-peshtera': `${BASE}/index.php?option=com_weblinks&view=category&id=32&Itemid=105`,
  '/razdel/drugi-vrazki': `${BASE}/index.php?option=com_weblinks&view=category&id=30&Itemid=105`,
  '/razdel/rodopska-iskra': `${BASE}/index.php?option=com_content&view=article&id=973&Itemid=106`,
  '/razdel/radio-peshtera': `${BASE}/index.php?option=com_content&view=article&id=2440&Itemid=145`,
  '/razdel/chitalishte-razvitie': `${BASE}/index.php?option=com_content&view=article&id=3772&Itemid=158`,
  '/razdel/krepost-peristera': `${BASE}/index.php?option=com_content&view=article&id=3073&Itemid=217`,
  '/razdel/proekti': `${BASE}/index.php?option=com_content&view=section&layout=blog&id=9&Itemid=222`,
  '/razdel/energiyna-efektivnost': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=48&Itemid=176`,
  '/razdel/ee-lot-1': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=47&Itemid=177`,
  '/razdel/ee-lot-2': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=49&Itemid=178`,
  '/razdel/ee-lot-3': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=50&Itemid=179`,
  '/razdel/ee-lot-4': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=51&Itemid=180`,
  '/razdel/ee-lot-5': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=52&Itemid=181`,
  '/razdel/ee-oa': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=53&Itemid=182`,
  '/razdel/ee-rit': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=55&Itemid=183`,
  '/razdel/ee-rpu': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=56&Itemid=184`,
  '/razdel/ee-odk': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=54&Itemid=185`,
  '/razdel/ee-nats': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=58&Itemid=187`,
  '/razdel/ee-peshtera2': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=66&Itemid=196`,
  '/razdel/ee-bg-rrp-4-023-1339-c01': `${BASE}/index.php?option=com_content&view=category&id=152&Itemid=275`,
  '/razdel/ee-bg-rrp-4-023-1359-c01': `${BASE}/index.php?option=com_content&view=category&id=151&Itemid=274`,
  '/razdel/ee-bg-rrp-4-023-1365-c01': `${BASE}/index.php?option=com_content&view=category&id=150&Itemid=273`,
  '/razdel/ee-bg-rrp-4-023-1386-c01': `${BASE}/index.php?option=com_content&view=category&id=153&Itemid=276`,
  '/razdel/ee-bg-rrp-4-023-1394-c01': `${BASE}/index.php?option=com_content&view=category&id=149&Itemid=271`,
  '/razdel/ee-bg-rrp-4-023-1405-c01': `${BASE}/index.php?option=com_content&view=category&id=148&Itemid=270`,
  '/razdel/ee-bg-rrp-4-023-1376-c01': `${BASE}/index.php?option=com_content&view=category&id=154&Itemid=277`,
  '/razdel/ee-mnogofamilni-zhilishtni': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=48&Itemid=272`,
  '/razdel/ee-mf-bg-rrp-4-023-1339-c01': `${BASE}/index.php?option=com_content&view=category&id=152&Itemid=275`,
  '/razdel/ee-mf-bg-rrp-4-023-1359-c01': `${BASE}/index.php?option=com_content&view=category&id=151&Itemid=274`,
  '/razdel/ee-mf-bg-rrp-4-023-1365-c01': `${BASE}/index.php?option=com_content&view=category&id=150&Itemid=273`,
  '/razdel/ee-mf-bg-rrp-4-023-1386-c01': `${BASE}/index.php?option=com_content&view=category&id=153&Itemid=276`,
  '/razdel/ee-mf-bg-rrp-4-023-1394-c01': `${BASE}/index.php?option=com_content&view=category&id=149&Itemid=271`,
  '/razdel/ee-mf-bg-rrp-4-023-1405-c01': `${BASE}/index.php?option=com_content&view=category&id=148&Itemid=270`,
  '/razdel/ee-mf-bg-rrp-4-023-1376-c01': `${BASE}/index.php?option=com_content&view=category&id=154&Itemid=277`,
  '/razdel/vei': `${BASE}/index.php?option=com_content&view=category&id=93&Itemid=223`,
  '/razdel/niskovagleprodna': `${BASE}/index.php?option=com_content&view=category&id=87&Itemid=224`,
  '/razdel/patronazhna-grizha': `${BASE}/index.php?option=com_content&view=category&id=81&Itemid=225`,
  '/razdel/proekt-bg16rfop001-8-006': `${BASE}/index.php?option=com_content&view=category&id=106&Itemid=226`,
  '/razdel/proekt-bg06rdnp001': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=110&Itemid=229`,
  '/razdel/mladezhki-tsentrove': `${BASE}/index.php?option=com_content&view=category&id=138&Itemid=265`,
  '/razdel/fotovoltaichna-dtsdmu': `${BASE}/index.php?option=com_content&view=category&id=157&Itemid=278`,
  '/razdel/inovativni-uslugi': `${BASE}/index.php?option=com_content&view=category&layout=blog&id=164&Itemid=279`,
  '/razdel/zashtita-lichni-danni': `${BASE}/index.php?option=com_content&view=category&id=60&Itemid=267`,
};

function extractNopad(html) {
  const re = /<div class="nopad">([\s\S]*?)<\/div>\s*<!-- end nopad -->/i;
  const m = html.match(re);
  if (!m) return null;
  let inner = m[1].trim();
  inner = inner.replace(/<!-- BEGIN: USERS TEMPSPLASH -->[\s\S]*?<!-- END: USERS TEMPSPLASH -->/gi, '');
  return inner;
}

/** Попъп шаблон (index2.php) — няма nopad */
function extractContentpaneBody(html) {
  const re = /<body[^>]*class="contentpane"[^>]*>([\s\S]*?)<\/body>/i;
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function absolutize(html) {
  return html
    .replace(/href="\/(?!\/)/g, `href="${BASE}/`)
    .replace(/href='\/(?!\/)/g, `href='${BASE}/`)
    .replace(/src="\/(?!\/)/g, `src="${BASE}/`)
    .replace(/src='\/(?!\/)/g, `src='${BASE}/`);
}

function stripScripts(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, '');
}

function stripOnclick(html) {
  return html.replace(/\s*on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'PeshteraMirrorScraper/1.0 (+local mirror)',
      'Accept-Language': 'bg,en;q=0.5',
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function main() {
  const out = {};
  const paths = Object.keys(PATH_TO_URL);
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const url = PATH_TO_URL[path];
    process.stderr.write(`[${i + 1}/${paths.length}] ${path}\n`);
    try {
      let html = await fetchHtml(url);
      let fragment = extractNopad(html);
      if (!fragment || fragment.length < 20) {
        fragment = extractContentpaneBody(html);
      }
      if (!fragment) {
        out[path] = { sourceUrl: url, html: null, error: 'no content block' };
        continue;
      }
      fragment = stripScripts(fragment);
      fragment = stripOnclick(fragment);
      fragment = absolutize(fragment);
      out[path] = { sourceUrl: url, html: fragment };
    } catch (e) {
      out[path] = { sourceUrl: url, html: null, error: String(e.message || e) };
    }
    await new Promise((r) => setTimeout(r, 150));
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(out, null, 0), 'utf8');
  const pathsOut = join(__dirname, '../src/data/municipalityMirrorPaths.js');
  const pathList = JSON.stringify(Object.keys(out), null, 2);
  writeFileSync(
    pathsOut,
    `/** Генерирано от scripts/scrape-municipality.mjs — не редактирайте на ръка */\nexport default new Set(${pathList});\n`,
    'utf8',
  );
  process.stderr.write(`Wrote ${OUT}\nWrote ${pathsOut}\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
