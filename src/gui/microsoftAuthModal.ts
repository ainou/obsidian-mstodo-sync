import { Modal } from 'obsidian';

export class MicrosoftAuthModal extends Modal {
	constructor(private readonly deviceCode: string, private readonly authUrl: string) {
		super(app);
	}
	onOpen(): void {
		const { contentEl } = this;

		contentEl.empty();
		contentEl.addClass('auth-modal');

		contentEl.createEl('h2', { text: 'Microsoft authentication required for first time use' });
		// contentEl.createEl("span",{text:`设备代码 ${this.deviceCode} 已复制到剪贴板`})
		contentEl.createEl('h4', { text: this.deviceCode });
		// contentEl.createEl("span",{text:`设备代码已复制到剪贴板`})
		contentEl.createEl('div', { text: 'The device code has been copied to the clipboard, please click on the link below to verify' });
		contentEl.createEl('a', { text: this.authUrl, href: this.authUrl });
		contentEl.createEl('hr');
	}
	onClose(): void {
		const { contentEl } = this;
		contentEl.empty();
	}
}
