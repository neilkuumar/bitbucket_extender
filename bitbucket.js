'use strict';

function copyBranchName(){
  const branchNameEl = document.querySelector('.branch-name');
  const range = document.createRange();
  const selection = window.getSelection();

  range.selectNode(branchNameEl);

  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');

  selection.removeAllRanges();
}

function isValidPage(){
  const isAPr = window.location.href.match(/\/pull-requests\/(\d+)/);

  return isAPr;
}

function addCopyButtons(){
  const container = document.createElement('div');

  const header = document.querySelector('#pull-request-header');
  const button = document.createElement('button');
  button.textContent = "Copy Branch Name";
  button.style = "margin-right: 20px;cursor:pointer;"
  button.onclick = copyBranchName;

  // add button
  container.appendChild(button);

  const jiraTicketNum = document.querySelector('.branch-name')
    .textContent
    .split("/")
    .find(text => ["ENG", "BUG", "PUG", "PROD", "FE"].includes(text.split("-")[0]));

  if(jiraTicketNum){
    const jiraLink = document.createElement('a');
    jiraLink.target= '_blank';
    jiraLink.setAttribute('href',`https://eigentech.atlassian.net/browse/${jiraTicketNum}`);
    jiraLink.innerText = `View ${jiraTicketNum} in JIRA`;

    container.appendChild(jiraLink);
  }

  header.prepend(container);
}

if(isValidPage()){
  addCopyButtons()
}
