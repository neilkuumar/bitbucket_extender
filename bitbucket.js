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

function addCopyButton(){
  const header = document.querySelector('#pull-request-header');
  const button = document.createElement('button');
  button.textContent = "Copy Branch Name";
  button.onclick = copyBranchName;

  header.prepend(button);
}

if(isValidPage()){
  addCopyButton()
}
