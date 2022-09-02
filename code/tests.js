
function Test_HTML() {
    let errors = [];

    // Check if we have all change logs
    for (let i = 0; i < CURRENT_VERSION; ++i) {
        if (!html.help.versions[i]) {
            errors.push("Couldn't find help_v" + (i+1));
        }
    }

    return errors;
}

function Test_GameFiles() {
    let errors = [];

    for (let name in games) {
        let g = games[name];
        if (g.marks[0][0][0] != "unknown")  { errors.push(name + " -> First mark must be 'unknown'");   }
        if (g.marks[0][1][0] != "corridor") { errors.push(name + " -> Second mark must be 'corridor'"); }
        if (!g.modifiers) { errors.push(name + " -> Missing modifiers"); }

        // Make sure images don't have illegal names
        for (let list of [g.marks, g.progress]) {
            for (let row of list) {
                for (let i of row) {
                    if (i[0].length > 0 && Object.keys(icons).includes(i[0])) {
                        errors.push(name + " -> Illegal mark name: " + i[0]);
                    }
                }
            } 
        }
    }

    return errors;
}

function RunTests() {
    let tests = [Test_HTML, Test_GameFiles];
    let errors = [];
    for (let t of tests) {
        let result = t();
        for (let e of result) {
            errors.push("[" + t.name + "] " + e);
        }
    }
    if (errors.length == 0) {
        console.log("Tests ran successfully!");
        return;
    }
    for (let e of errors) {
        console.error(e);
    }
}