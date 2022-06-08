
function getOptionMorn(el) {
    const option = el.value;
    if (option === 'esc') return
        displayMorningProgramLinks(option);
    return option;
}

function displayMorningProgramLinks(prgm) {
    var resultBox = document.getElementById("MorningDropdown");
    var linkText = document.getElementById("mornProgram");
        if ( prgm === 'MYP') linkText.href = 'https://www.yu.edu/academics/torah-studies/men/uts/myp';
        if ( prgm === 'BMP') linkText.href = 'https://www.yu.edu/academics/torah-studies/men/uts/bmp';
        if ( prgm === 'IBC') linkText.href = 'https://www.yu.edu/academics/torah-studies/men/uts/ibc';
        if ( prgm === 'JSS') linkText.href = 'https://www.yu.edu/academics/torah-studies/men/uts/jss';
}

function getOptionAfter(el) {
    const option = el.value;
    if (option === 'esc') return
        displayAfternoonProgramLinks(option);
    return option;
}

function displayAfternoonProgramLinks(prgm) {
    var resultBox = document.getElementById("AfternoonDropdown");
    var linkText = document.getElementById("afternoonProgram");
    if (prgm === 'Biology') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Biology%20Major%207.26.18_0.pdf';
    if (prgm === 'Biochemistry') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/revised_biochem_major_May%202022.pdf';
    if (prgm === 'Chemistry') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/11-18%20chemistry%20major.pdf';
    if (prgm === 'Computer Science') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/comp%20sci%20BA%20December%202021.pdf';
    if (prgm === 'Computer Science- Distributed Systems') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/comp%20sci%20distributed%20systems%2C%20December%202021.pdf';
    if (prgm === 'Computer Science--Artificial Intelligence') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/comp%20sci%20Artificial%20Intelligence%20December%202021_0.pdf';
    if (prgm === 'Economics') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Economics%20Major%207.26.18_1.pdf';
    if (prgm === 'Economics Mathematical Concentration') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Mathematical%20Economics%20Major%205.31.19%20%28002%29.pdf';
    if (prgm === 'English--Literary Studies') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/English%20Major%20Literary%20Studies%20July%202020_1.pdf';
    if (prgm === 'English--Creative Writing') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/English%20Major%20Creative%20Writing%20July%202020.pdf';
    if (prgm === 'History') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/History%20Major%20012822.pdf';
    if (prgm === 'Jewish Studies') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Jewish%20Studies%20Major%208.10.2021.pdf';
    if (prgm === 'Mathematics Major (Specialization in Pure and Applied Mathematics)') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Math%20Major%2C%20pure%20and%20applied%20mathematics%207.12.2021.pdf';
    if (prgm === 'Mathematics Major (Specialization in Actuarial and Financial Mathematics)') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Math%20Major%2C%20Pre%20Act%20Track%207.26.2018_2.pdf';
    if (prgm === 'Mathematics Major (Specialization in Computational Science)') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Math%20Major%2C%20COmputer%20Science%207.12.2021.pdf';
    if (prgm === 'Philosophy') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Philosophy%20Major%207.26.18.pdf';
    if (prgm === 'Physics') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Physics%20Major%201.28.2022.pdf';
    if (prgm === 'Political Science') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Political%20Science%20Major%207.26.18_1.pdf';
    if (prgm === 'Pre-Engineering/Physics') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/PreEngineeering%20Physics%20Major%201.28.2022.pdf';
    if (prgm === 'Pre-Engineering/Columbia University Track') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Pre-Engineering%20Track-%20Columbia%20University%201.28.2022_1.pdf';
    if (prgm === 'Psychology') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Psychology%20Major%207.26.18.pdf';
    if (prgm === 'Psychology and the Community Track') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Psy%20and%20the%20community%20major%20November%202021.pdf';
    if (prgm === 'Sociology') linkText.href = 'https://www.yu.edu/sites/default/files/inline-files/Sociology%20Major%207.26.18_0.pdf';
    if (prgm === 'Accounting') linkText.href = 'https://www.yu.edu//syms/ug/accounting';
    if (prgm === 'Business Honors and Entrepreneurial Leadership') linkText.href = 'https://www.yu.edu//syms/honors';
    if (prgm === 'Finance') linkText.href = 'https://www.yu.edu//syms/ug/finance';
    if (prgm === 'Business Analytics') linkText.href = 'https://www.yu.edu//syms/ug/information-decision-sciences';
    if (prgm === 'Marketing') linkText.href = 'https://www.yu.edu//syms/ug/marketing';
    if (prgm === 'Strategy and Entrepreneurship') linkText.href = 'https://www.yu.edu//syms/ug/strategy-entrepreneurship';

    
}