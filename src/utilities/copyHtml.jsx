import { renderAsync } from "@react-email/render";

const renderHtmlFromJsx = async (template) => {
  const html = await renderAsync(template, {
    pretty: true,
  });
  return html;
};

const copyToClipboard = async (template) => {
  if (template) {
    const htmlContent = await renderHtmlFromJsx(template);
    const type = "text/html";
    const blob = new Blob([htmlContent], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(() => alert("Copied Succesfully!!"));
  }
};

export default copyToClipboard;
