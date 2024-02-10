import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        nav: {
            connection: 'Connection',
            about: 'About',
            generation: 'Generation',
            history: 'History',
            config: 'Config',
        },
        gen: {
            skip: 'Skip',
            interrupt: 'Interrupt',
            addLoRA: 'Add LoRA',
            enterPrompt: 'Enter prompt',
            enterNegativePrompt: 'Enter negative prompt',
            extraNetworks: 'Extra networks',
            clearPrompt: 'Clear current prompt',
            samplingSteps: 'Sampling Steps',
            cfg: 'CFG Scale',
            batchSize: 'Batch Size',
            batchCount: 'Batch Count',
            vae: 'VAE',
            sampler: 'Sampler',
            advancedSettings: 'Advanced settings',
            prepare: 'Preview Payload',
            selectRefArea: 'Select Ref Area',
            scaleRatio: 'Scale Ratio',
            referenceRange: 'Reference Range',
            search: 'Search',
            tagger: 'Tagger',
            generateMore: 'Generate more images with same settings',
            generateMoreVariants: 'Generate more with variation seed',
            segColorPicker: 'Segmentation Color Picker',
            findColorsOnCanvas: 'Find colors on canvas',

            inpaintArea: 'Inpaint Area',
            resizeMode: 'Resize Mode',
            inpaintFill: 'Inpaint Fill',
            maskMode: 'Mask Mode',
            denoisingStrength: 'Denoising Strength',

            inputImage: 'Input image',
            inputMask: 'Input mask',
            steps: {
                kInitialState: '',
                kSelectRefAreaState: 'Select reference area on canvas',
                kPayloadPreparedState: 'Click generate when satisfied with payload',
                kFinishedState: 'Pick the result image(s) to keep. Ctrl+click to select multiple images.',

                TokSelectRefAreaState: 'Manually select reference area',
                TokPayloadPreparedState: 'Preview payload before sending it',
                TokFinishedState: 'Generate image based on current setting',
            },

            resetToDefault: 'Reset to current config',
        },
        cnet: {
            guidanceRange: 'Guidance Range',
            lowvram: 'Low VRAM',
            model: 'Model',
            module: 'Preprocessor',
            unlinked: 'Unlinked',
            unitDisabled: 'ControlNet unit disabled',
            unitEnabled: 'ControlNet unit enabled',
            controlMode: 'Control Mode',
            uploadImage: 'Upload Image',
            preprocessorInput: 'Preprocessor Input',
            preprocessorResult: 'Preprocessor Result',
            linkActiveLayer: 'Link active layer as control map',
        },
        tagger: {
            overwritePrompt: 'Overwrite Prompt',
            appendPrompt: 'Append Prompt',
        },
        upscale: {
            upscaler: 'Upscaler',
            redrawMode: 'Redraw Mode',
            tileWidth: 'Tile Width',
            tileHeight: 'Tile Height',
            maskBlur: 'Mask Blur',
            padding: 'Padding',
            seamFixType: 'Seam Fix Type',
            seamfix: {
                denoise: 'Seam Fix Denoise Strength',
                width: 'Seam Fix Width',
                padding: 'Seam Fix Padding',
                maskBlur: 'Seam Fix Mask Blur',
            },
        },

        weight: 'Weight',
        width: 'Width',
        height: 'Height',

        con: {
            connect: 'Connect',
            connected: 'Connected',
            newConnection: 'New Connection',
        },
        generate: 'Generate',
        threshold: 'Threshold',

        config: {
            newConfig: 'Enter new config name',
            download: 'Download',
            upload: 'Upload',
            downloadConfig: 'Download config as .json file',
            uploadConfig: 'Merge config with uploaded json file',
            deleteConfig: 'Delete the selected config',
            saveConfig: 'Save config',
            activateConfig: 'Activate config',
            defaults: 'Defaults',
            toolbox: 'Toolbox',
            selectConfig: 'Select configs',
            toggleViewDiff: 'Toggle Diff/All',
        },
    },
    zh: {
        nav: {
            connection: '连接',
            about: '关于',
            generation: '生成',
            history: '历史',
            config: '配置',
        },
        gen: {
            skip: '跳过',
            interrupt: '中断',
            addLoRA: '添加 LoRA',
            enterPrompt: '输入提示',
            enterNegativePrompt: '输入负提示',
            extraNetworks: '额外网络',
            clearPrompt: '清除当前提示',
            samplingSteps: '采样步骤',
            cfg: 'CFG 比例',
            batchSize: '批处理大小',
            sampler: '采样器',
            advancedSettings: '高级设置',
            prepare: '预览载荷',
            selectRefArea: '选择参考区域',
            scaleRatio: '缩放比例',
            referenceRange: '参考范围',

            inpaintArea: '修复区域',
            resizeMode: '调整大小模式',
            inpaintFill: '修复填充',
            maskMode: '掩码模式',
            denoisingStrength: '降噪强度',

            inputImage: '输入图像',
            inputMask: '输入掩码',
            steps: {
                kInitialState: '',
                kSelectRefAreaState: '在画布上选择参考区域',
                kPayloadPreparedState: '对载荷满意时点击生成',
                kFinishedState: '选择要保留的结果图像',

                TokSelectRefAreaState: '手动选择参考区域',
                TokPayloadPreparedState: '在发送之前预览载荷',
                TokFinishedState: '根据当前设置生成图像',
            },

            resetToDefault: '重置参数到当前配置',
        },
        cnet: {
            guidanceRange: '引导范围',
            lowvram: 'Low VRAM',
            model: '模型',
            module: '预处理器',
            unlinked: '未链接',
            unitDisabled: 'ControlNet 单元已禁用',
            unitEnabled: 'ControlNet 单元已启用',
            controlMode: '控制模式',
            uploadImage: '上传图像',
            preprocessorInput: '预处理器输入',
            preprocessorResult: '预处理器结果',
        },

        weight: '权重',
        width: '宽度',
        height: '高度',

        con: {
            connect: '连接',
            connected: '已连接',
            newConnection: '新连接',
        },
        generate: '生成',

        config: {
            newConfig: '输入新配置名称',
            downloadConfig: '将配置下载为 .json5 文件',
            deleteConfig: '删除所选配置',
            saveConfig: '保存配置',
        },
    },
};

export default createI18n({
    locale: navigator.language.split('-')[0] || 'en',
    fallbackLocale: 'en',
    legacy: false,
    messages,
});