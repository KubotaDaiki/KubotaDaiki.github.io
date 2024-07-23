export function Links({ work }) {
  return (
    <div className="flex flex-col gap-1">
      <p>リンク</p>
      <Link href={work.fields.github_url}>GitHub</Link>
      {work.fields.demoVideo && (
        <Link href={work.fields.demoVideo.fields.file.url}>デモ動画</Link>
      )}
      {work.fields.chromeExtensionUrl && (
        <Link href={work.fields.chromeExtensionUrl}>Chrome ウェブストア</Link>
      )}
      {work.fields.demoSite && (
        <Link href={work.fields.demoSite}>デモサイト</Link>
      )}
    </div>
  );
}

function Link({ href, children }) {
  return (
    <a href={href} className="underline decoration-[#b7b7b7] hover:decoration-[#000000]">{children}</a>
  );
}