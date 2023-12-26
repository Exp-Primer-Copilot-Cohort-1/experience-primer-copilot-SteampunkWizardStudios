function skillsMembers() {
    var skills = document.getElementById("skills").value;
    var members = document.getElementById("members").value;
    var skill = skills.split(",");
    var member = members.split(",");
    var skillMember = [];
    for (var i = 0; i < skill.length; i++) {
        for (var j = 0; j < member.length; j++) {
            if (skill[i] == member[j]) {
                skillMember.push(skill[i]);
            }
        }
    }
    var result = skillMember.join(",");
    document.getElementById("result").innerHTML = result;
}