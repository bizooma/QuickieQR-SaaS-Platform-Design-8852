import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiCopy, FiRefreshCw, FiPalette, FiType, FiLayout, FiSliders } = FiIcons;

const QRGenerator = () => {
  const [text, setText] = useState('https://quickieqr.com');
  const [qrCode, setQrCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const [options, setOptions] = useState({
    errorCorrectionLevel: 'M',
    type: 'image/png',
    quality: 0.92,
    margin: 1,
    color: {
      dark: '#1f2937',
      light: '#ffffff'
    },
    width: 256
  });
  const canvasRef = useRef();

  const generateQR = async () => {
    if (!text.trim()) return;
    
    setIsGenerating(true);
    try {
      const qrCodeDataURL = await QRCode.toDataURL(text, options);
      setQrCode(qrCodeDataURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
    setIsGenerating(false);
  };

  const downloadQR = () => {
    if (!qrCode) return;
    
    const link = document.createElement('a');
    link.download = 'quickie-qr-code.png';
    link.href = qrCode;
    link.click();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  useEffect(() => {
    generateQR();
  }, [text, options]);

  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            QR Code
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create professional QR codes in seconds. Customize, download, and track performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {['content', 'design', 'advanced'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 font-medium text-sm capitalize transition-colors flex items-center space-x-3 ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <SafeIcon 
                    icon={
                      tab === 'content' ? FiType : 
                      tab === 'design' ? FiPalette : 
                      FiSliders
                    } 
                    className="w-5 h-5" 
                  />
                  <span>{tab}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              {activeTab === 'content' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">QR Code Content</h3>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter URL, text, or any content..."
                    className="w-full h-40 bg-gray-50 border border-gray-300 rounded-xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <SafeIcon icon={FiCopy} className="w-4 h-4" />
                      <span className="text-sm font-medium">Copy content</span>
                    </button>
                    <span className="text-gray-500 text-sm">{text.length} characters</span>
                  </div>
                </div>
              )}

              {activeTab === 'design' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">QR Code Design</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-3">Foreground</label>
                        <div className="flex space-x-3">
                          <input
                            type="color"
                            value={options.color.dark}
                            onChange={(e) => setOptions(prev => ({
                              ...prev,
                              color: { ...prev.color, dark: e.target.value }
                            }))}
                            className="w-12 h-12 rounded-xl border border-gray-300"
                          />
                          <input 
                            type="text"
                            value={options.color.dark}
                            onChange={(e) => setOptions(prev => ({
                              ...prev,
                              color: { ...prev.color, dark: e.target.value }
                            }))}
                            className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-3">Background</label>
                        <div className="flex space-x-3">
                          <input
                            type="color"
                            value={options.color.light}
                            onChange={(e) => setOptions(prev => ({
                              ...prev,
                              color: { ...prev.color, light: e.target.value }
                            }))}
                            className="w-12 h-12 rounded-xl border border-gray-300"
                          />
                          <input 
                            type="text"
                            value={options.color.light}
                            onChange={(e) => setOptions(prev => ({
                              ...prev,
                              color: { ...prev.color, light: e.target.value }
                            }))}
                            className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">Size</label>
                      <select
                        value={options.width}
                        onChange={(e) => setOptions(prev => ({ ...prev, width: parseInt(e.target.value) }))}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500"
                      >
                        <option value={128}>Small (128px)</option>
                        <option value={256}>Medium (256px)</option>
                        <option value={512}>Large (512px)</option>
                        <option value={1024}>Extra Large (1024px)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Advanced Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">Error Correction</label>
                      <select
                        value={options.errorCorrectionLevel}
                        onChange={(e) => setOptions(prev => ({ ...prev, errorCorrectionLevel: e.target.value }))}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500"
                      >
                        <option value="L">Low (~7%)</option>
                        <option value="M">Medium (~15%)</option>
                        <option value="Q">Quartile (~25%)</option>
                        <option value="H">High (~30%)</option>
                      </select>
                      <p className="text-gray-500 text-xs mt-2">Higher correction allows more damage to the code while remaining scannable.</p>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">Margin</label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="0"
                          max="4"
                          step="1"
                          value={options.margin}
                          onChange={(e) => setOptions(prev => ({ ...prev, margin: parseInt(e.target.value) }))}
                          className="flex-1"
                        />
                        <span className="text-gray-900 font-medium w-8 text-center">{options.margin}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Preview on mobile */}
            <div className="block lg:hidden">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 flex justify-center">
                {qrCode ? (
                  <img 
                    src={qrCode} 
                    alt="Generated QR Code" 
                    className="max-w-[200px] max-h-[200px] rounded-lg"
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* QR Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-10 w-full max-w-md shadow-lg">
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                {qrCode ? (
                  <img 
                    src={qrCode} 
                    alt="Generated QR Code" 
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">QR Code will appear here</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <button
                  onClick={downloadQR}
                  disabled={!qrCode}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <SafeIcon icon={FiDownload} className="w-5 h-5" />
                  <span>Download PNG</span>
                </button>

                <button
                  onClick={generateQR}
                  disabled={isGenerating}
                  className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-3 disabled:opacity-50"
                >
                  <SafeIcon icon={FiRefreshCw} className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>{isGenerating ? 'Generating...' : 'Regenerate'}</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-2">Need more formats?</p>
              <p className="text-blue-600 text-sm font-medium">Upgrade to Pro for SVG, PDF, and EPS exports</p>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile actions */}
        <div className="mt-12 lg:hidden space-y-4">
          <button
            onClick={downloadQR}
            disabled={!qrCode}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            <SafeIcon icon={FiDownload} className="w-5 h-5" />
            <span>Download PNG</span>
          </button>

          <button
            onClick={generateQR}
            disabled={isGenerating}
            className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-3 disabled:opacity-50"
          >
            <SafeIcon icon={FiRefreshCw} className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? 'Generating...' : 'Regenerate'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QRGenerator;