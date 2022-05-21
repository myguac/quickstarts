// Render a Hubble (wordle) board

export default function ({ context }) {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hubble</title>
    <base href="${context.appUrl}/" />
  
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  
  <body>
    <div id="app"></div>
    <script src="app.js" type="text/babel"></script>
  </body>
</html>
`
  return { html }
}