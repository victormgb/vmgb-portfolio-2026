import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  X,
  Building2,
  Package,
  ShoppingCart,
  Zap,
  Activity,
  Layers,
  Shield,
  Box,
  Palette,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Search,
} from 'lucide-react';

interface LiveDemoModalProps {
  projectId: string | null;
  onClose: () => void;
  lang: 'es' | 'en';
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  projectId,
  onClose,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'saas' | '3d' | 'payment'>('saas');
  const [tenant, setTenant] = useState<'acme' | 'nova' | 'vertex'>('acme');
  const [searchQuery, setSearchQuery] = useState('');
  const [stockItems, setStockItems] = useState([
    { id: 'SKU-091', name: 'Microcontroller Cortex M4', cat: 'Electronics', stock: 1420, price: 18.5 },
    { id: 'SKU-092', name: 'Optical Sensor Array 500nm', cat: 'Sensors', stock: 28, price: 45.0 },
    { id: 'SKU-093', name: 'High-Torque Stepper Motor', cat: 'Motors', stock: 540, price: 82.0 },
    { id: 'SKU-094', name: 'Polymer Battery Cell 4000mAh', cat: 'Power', stock: 12, price: 29.9 },
  ]);
  const [orderProcessing, setOrderProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    '[INIT] Multi-Tenant Gateway listener active on port 8080',
    '[ROUTING] Dynamic schema resolution ready',
  ]);

  // 3D Canvas rotation state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    if (projectId === '3d-webrtc-platform') setActiveTab('3d');
    else if (projectId === 'fintech-review-engine') setActiveTab('payment');
    else setActiveTab('saas');
  }, [projectId]);

  // Simple 3D wireframe animation on canvas
  useEffect(() => {
    if (activeTab !== '3d') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const size = 65;

      angle += 0.02;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosB = Math.cos(angle * 0.7);
      const sinB = Math.sin(angle * 0.7);

      const vertices = [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
      ];

      const projected = vertices.map(([x, y, z]) => {
        // Rotate around Y and X
        const x1 = x * cosA - z * sinA;
        const z1 = z * cosA + x * sinA;
        const y2 = y * cosB - z1 * sinB;
        const z2 = z1 * cosB + y * sinB;

        const distance = 3.5;
        const scale = 220 / (distance - z2);
        return [cx + x1 * scale, cy + y2 * scale];
      });

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];

      // Draw glowing wireframe
      ctx.strokeStyle = '#00F0FF';
      ctx.lineWidth = 1.8;
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#00F0FF';

      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
        ctx.stroke();
      });

      // Draw avatar nodes
      ctx.fillStyle = '#8B5CF6';
      projected.forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activeTab]);

  const handleSimulateOrder = () => {
    setOrderProcessing(true);
    setOrderSuccess(false);

    setTimeout(() => {
      const tenantSchema = tenant === 'acme' ? 'tenant_acme' : tenant === 'nova' ? 'tenant_nova' : 'tenant_vertex';
      setSimulatedLogs((prev) => [
        `[${new Date().toLocaleTimeString()}] ORDER_CREATED: Cart id #ORD-${Math.floor(Math.random() * 9000 + 1000)}`,
        `[${new Date().toLocaleTimeString()}] SCHEMA_SWITCH: SET search_path TO "${tenantSchema}";`,
        `[${new Date().toLocaleTimeString()}] DB_INSERT: Table "orders" updated (Latency: 3.8ms)`,
        `[${new Date().toLocaleTimeString()}] DISPATCH: Webhook queued for Elastic Email via RabbitMQ`,
        ...prev.slice(0, 6),
      ]);
      setOrderProcessing(false);
      setOrderSuccess(true);
      setTimeout(() => setOrderSuccess(false), 4000);
    }, 650);
  };

  const handleAdjustStock = (id: string, delta: number) => {
    setStockItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stock: Math.max(0, item.stock + delta) } : item
      )
    );
  };

  if (!projectId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-xl bg-[#0A0D14] border border-cyan-500/40 shadow-2xl flex flex-col">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0F141C] border-b border-white/10 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#131924] border border-cyan-500/40 flex items-center justify-center text-[#00F0FF]">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                  Interactive Live Simulator // Production Sandbox
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  Active Runtime
                </span>
              </div>
              <h3 className="font-bold text-base text-white font-sans">
                {activeTab === 'saas'
                  ? 'Multi-Tenant SaaS Inventory, Sales & Order Management System'
                  : activeTab === '3d'
                  ? '3D Multi-User Collaborative Platform & WebGL World'
                  : 'Enterprise Payment & Product Review Engine'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-[#1B2232] text-slate-400 hover:text-white transition-colors"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#0D121B] border-b border-white/5 font-mono text-xs">
          <button
            onClick={() => setActiveTab('saas')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'saas'
                ? 'bg-cyan-950 border border-cyan-400/50 text-cyan-300 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            01. Multi-Tenant SaaS Engine
          </button>
          <button
            onClick={() => setActiveTab('3d')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === '3d'
                ? 'bg-purple-950 border border-purple-400/50 text-purple-300 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            02. 3D WebGL / WebRTC Room
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'payment'
                ? 'bg-blue-950 border border-blue-400/50 text-blue-300 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            03. Stripe Payment & Canvas Review
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'saas' && (
            <div className="space-y-6">
              {/* Tenant Switcher & Isolation Inspector */}
              <div className="p-4 rounded-lg bg-[#0F141C] border border-white/8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>TENANT ISOLATION SELECTOR (SCHEMA PER TENANT):</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Cambiar el inquilino modifica el contexto de autenticación JWT y cambia el search_path en PostgreSQL en tiempo real.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {(['acme', 'nova', 'vertex'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTenant(t)}
                      className={`px-3 py-1.5 rounded font-mono text-xs transition-all ${
                        tenant === t
                          ? 'bg-[#00F0FF] text-[#0A0D14] font-bold shadow-md shadow-cyan-500/25'
                          : 'bg-[#131924] text-slate-300 border border-white/10 hover:border-cyan-500/30'
                      }`}
                    >
                      {t === 'acme'
                        ? 'Acme Corp (ID: #89)'
                        : t === 'nova'
                        ? 'Nova Logistics (ID: #12)'
                        : 'Vertex Labs (ID: #04)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inventory Management Table */}
              <div className="rounded-lg bg-[#0F141C] border border-white/8 overflow-hidden">
                <div className="p-4 bg-[#131924] border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-white uppercase">
                      Catálogo & Inventario Activo (Tenant: {tenant.toUpperCase()})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        placeholder="Filtrar por SKU o nombre..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8 pr-3 py-1.5 rounded bg-[#0A0D14] border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <button
                      onClick={handleSimulateOrder}
                      disabled={orderProcessing}
                      className="px-3 py-1.5 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-bold text-xs font-mono flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                    >
                      {orderProcessing ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Procesando...</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Simular Pedido</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-[#0A0D14] text-slate-400 border-b border-white/5 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="py-2.5 px-4">SKU / ID</th>
                        <th className="py-2.5 px-4">Descripción del Item</th>
                        <th className="py-2.5 px-4">Categoría</th>
                        <th className="py-2.5 px-4">Stock Actual</th>
                        <th className="py-2.5 px-4">Precio Unitario</th>
                        <th className="py-2.5 px-4 text-right">Ajuste Rápido</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      {stockItems
                        .filter(
                          (item) =>
                            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.id.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((item) => (
                          <tr key={item.id} className="hover:bg-white/[0.02]">
                            <td className="py-3 px-4 text-cyan-300 font-semibold">
                              {item.id}
                            </td>
                            <td className="py-3 px-4 text-white font-medium">
                              {item.name}
                            </td>
                            <td className="py-3 px-4 text-slate-400">
                              {item.cat}
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                                  item.stock < 30
                                    ? 'bg-amber-950/60 text-amber-400 border border-amber-500/30'
                                    : 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                                }`}
                              >
                                {item.stock} unidades
                              </span>
                            </td>
                            <td className="py-3 px-4 text-slate-300">
                              ${item.price.toFixed(2)} USD
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => handleAdjustStock(item.id, -10)}
                                  className="px-2 py-0.5 rounded bg-[#131924] hover:bg-[#1B2232] border border-white/10 text-slate-300"
                                >
                                  -10
                                </button>
                                <button
                                  onClick={() => handleAdjustStock(item.id, 10)}
                                  className="px-2 py-0.5 rounded bg-[#131924] hover:bg-[#1B2232] border border-white/10 text-cyan-300"
                                >
                                  +10
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Real-Time Terminal Audit Log */}
              <div className="p-4 rounded-lg bg-[#070A0F] border border-white/8 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-white/5 mb-3">
                  <span className="text-cyan-400">
                    REAL-TIME ARCHITECTURE AUDIT LOG STREAM
                  </span>
                  <span className="text-emerald-400">
                    {orderSuccess ? '✓ Transacción confirmada en 4.2ms' : 'En espera de eventos'}
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-300">
                  {simulatedLogs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === '3d' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 bg-[#070A0F] rounded-lg border border-purple-500/30 p-4 flex flex-col items-center justify-center relative min-h-[320px]">
                  <canvas
                    ref={canvasRef}
                    width={340}
                    height={260}
                    className="max-w-full"
                  />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-purple-300">
                      WebGL 2.0 Renderer · Three.js
                    </span>
                    <span className="text-emerald-400 font-bold">
                      60.0 FPS · 0ms Frame Drop
                    </span>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-lg bg-[#0F141C] border border-white/8 space-y-3">
                    <div className="text-purple-400 font-bold uppercase text-[11px]">
                      WebRTC Spatial Audio & Mesh Sync
                    </div>
                    <div className="text-slate-300 leading-relaxed font-sans text-xs">
                      Entorno de realidad virtual en navegador utilizando WebRTC para streams de voz posicional, avatar interpolado a 60 FPS y carga asíncrona de modelos glTF/USDZ.
                    </div>
                    <div className="pt-2 border-t border-white/5 space-y-1.5 text-[11px] text-slate-400">
                      <div className="flex justify-between">
                        <span>Canales WebRTC:</span>
                        <span className="text-emerald-400 font-bold">Mesh + DataChannel</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Latencia de red:</span>
                        <span className="text-cyan-400 font-bold">18ms (Peer-to-Peer)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AR QuickLook:</span>
                        <span className="text-white">iOS & Android Sincronizado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-[#0F141C] border border-blue-500/30 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-blue-400 font-bold uppercase flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>PCI-DSS Level 1 Compliant Payment Tunnel</span>
                  </span>
                  <span className="text-emerald-400 font-bold">
                    99.99% Fault Tolerance
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                  Microservicio transaccional diseñado para procesar cobros directos sin exponer información crediticia al backend monolítico. Integra tokens efímeros de Stripe Elements, idempotencia vía Redis y notificaciones por WebSockets.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
                  <div className="p-3 rounded bg-[#131924] border border-white/5">
                    <div className="text-slate-400 text-[10px]">Arquitectura de Pagos</div>
                    <div className="text-white font-bold mt-1">Stripe Payment Intents</div>
                  </div>
                  <div className="p-3 rounded bg-[#131924] border border-white/5">
                    <div className="text-slate-400 text-[10px]">Cache & Locks</div>
                    <div className="text-cyan-400 font-bold mt-1">Redis Redlock Distributed</div>
                  </div>
                  <div className="p-3 rounded bg-[#131924] border border-white/5">
                    <div className="text-slate-400 text-[10px]">Infraestructura AWS</div>
                    <div className="text-emerald-400 font-bold mt-1">ALB + EC2 Auto-Scaling</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
