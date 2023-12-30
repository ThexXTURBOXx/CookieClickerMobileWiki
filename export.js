JSON.stringify(G.achievs, function(key, value) {if (key === 'unlockAt') { return undefined; } return value; });
JSON.stringify(G.upgrades.map((u) => { u.children = G.HeavenlyUpgradeChildren[u.id]; u.desc = u.descFunc?u.descFunc(u):u.desc; return u; }), function(key, value) {if (key === 'unlockAt' || key === 'unshackleUpgrade') { return undefined; } return value; });
