JSON.stringify(G.achievs, function(key, value) {if (key === 'unlockAt') { return undefined; } return value; });
JSON.stringify(G.upgrades.map((u) => { u.children = G.HeavenlyUpgradeChildren[u.id]; return u; }), function(key, value) {if (key === 'unlockAt') { return undefined; } return value; });
