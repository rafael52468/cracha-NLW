const LinksSocialMedia = {
  github: 'rafael52468',
  youtube: 'channel/UCzoTxFeeUyq2ZOC-9EMg9QA',
  instagram: 'rafael_lima52',
  facebook: '',
  twitter: 'Rafa_ligeirinho'
}

function ChangeUserName() {
  document.getElementById('UserName').textContent = 'Rafael Ribeiro'
  //UserName.textContent = 'Rafael'// (Mesma funcionabilidade porém limitada com apenas Id)
}

function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }
  

}
// função para sobreescrever os links da ul 

ChangeSocialMediaLinks()                    
ChangeUserName()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    UserName.textContent = data.name
    UserBio.textContent = data.bio
    UserLink.href = data.html_url
    UserImage.src = data.avatar_url
  })
}

getGithubProfileInfos() 