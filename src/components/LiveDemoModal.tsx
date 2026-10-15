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
  Gamepad2,
  Flame,
  Target,
  Trophy,
  Star,
  Check,
  Plus,
  Trash2,
  ExternalLink,
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
  const [activeTab, setActiveTab] = useState<'saas' | '3d' | 'gamification'>('saas');
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

  // Gamification interactive state
  const [gamificationGoals, setGamificationGoals] = useState([
    { id: '1', title: 'Call friend', type: 'One-time', xp: 10, completed: false },
    { id: '2', title: 'Do the shopping', type: 'Daily', xp: 10, completed: false },
    { id: '3', title: '30 minutes exercise', type: 'Daily', xp: 10, completed: false },
    { id: '4', title: 'Read 30 pages', type: 'Daily', xp: 10, completed: false },
  ]);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [newGoalType, setNewGoalType] = useState<'Daily' | 'One-time'>('Daily');

  // 3D Canvas rotation state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    if (projectId === '3d-webrtc-platform') setActiveTab('3d');
    else if (projectId === 'gamification-objectives') setActiveTab('gamification');
    else setActiveTab('saas');
  }, [projectId]);

  const handleCompleteGoal = (id: string) => {
    setGamificationGoals((prev) =>
      prev.map((g) => {
        if (g.id === id) {
          if (!g.completed) {
            const nextXp = xp + g.xp;
            if (nextXp >= 100) {
              setLevel((l) => l + 1);
              setXp(nextXp - 100);
            } else {
              setXp(nextXp);
            }
            setStreak((s) => s + 1);
            return { ...g, completed: true };
          }
        }
        return g;
      })
    );
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalTitle.trim()) return;
    setGamificationGoals((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: newGoalTitle.trim(),
        type: newGoalType,
        xp: 10,
        completed: false,
      },
    ]);
    setNewGoalTitle('');
  };

  const handleDeleteGoal = (id: string) => {
    setGamificationGoals((prev) => prev.filter((g) => g.id !== id));
  };

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
                  Live Application & Architecture Sandbox
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  Production Active
                </span>
              </div>
              <h3 className="font-bold text-base text-white font-sans">
                {activeTab === 'saas'
                  ? 'SystemCA — Multi-Tenant SaaS Inventory, Sales & Order Management'
                  : activeTab === '3d'
                  ? '3D Multi-User Collaborative Platform & WebGL World'
                  : 'Gamefication Objectives — Personal Goals & Habits Platform'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === 'saas' && (
              <a
                href="https://sassinventory-vmgb.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-xs font-mono shadow-sm"
              >
                <span>Abrir App Real</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
            {activeTab === 'gamification' && (
              <a
                href="https://gamefication-objectives.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-xs font-mono shadow-sm"
              >
                <span>Abrir App Real</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded hover:bg-[#1B2232] text-slate-400 hover:text-white transition-colors"
              title="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#0D121B] border-b border-white/5 font-mono text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('saas')}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeTab === 'saas'
                  ? 'bg-cyan-950 border border-cyan-400/50 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              01. SystemCA (SaaS Real)
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
              onClick={() => setActiveTab('gamification')}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeTab === 'gamification'
                  ? 'bg-cyan-950 border border-cyan-400/50 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              03. Gamefication Objectives (Netlify)
            </button>
          </div>

          {activeTab === 'saas' && (
            <div className="hidden md:flex items-center gap-3 text-[11px]">
              <a
                href="https://github.com/victormgb/sass-inventory-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Frontend Repo</span>
                <span className="text-cyan-400">↗</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="https://github.com/victormgb/sass-inventory-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Backend Repo</span>
                <span className="text-cyan-400">↗</span>
              </a>
            </div>
          )}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'saas' && (
            <div className="space-y-6">
              {/* Real Project Banner */}
              <div className="p-4 rounded-lg bg-[#0F141C] border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-white">
                      APLICACIÓN EN PRODUCCIÓN:
                    </span>
                    <a
                      href="https://sassinventory-vmgb.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#00F0FF] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>https://sassinventory-vmgb.netlify.app/</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    Arquitectura Multi-Tenant implementada con frontend en Next.js/React desplegado en Netlify y backend de microservicios con PostgreSQL (aislamiento estricto por esquema para SystemCA y nuevos inquilinos).
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://sassinventory-vmgb.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-bold text-xs font-mono shadow-md shadow-cyan-500/20"
                  >
                    Abrir App en Vivo ↗
                  </a>
                </div>
              </div>

              {/* Tenant Switcher & Isolation Inspector */}
              <div className="p-4 rounded-lg bg-[#0F141C] border border-white/8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>INSPECTOR DE AISLAMIENTO POR ESQUEMA (POSTGRESQL):</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Selecciona un inquilino para simular el enrutamiento de consultas con SET search_path hacia su esquema aislado.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setTenant('acme')}
                    className={`px-3 py-1.5 rounded font-mono text-xs transition-all ${
                      tenant === 'acme'
                        ? 'bg-[#00F0FF] text-[#0A0D14] font-bold shadow-md shadow-cyan-500/25'
                        : 'bg-[#131924] text-slate-300 border border-white/10 hover:border-cyan-500/30'
                    }`}
                  >
                    SystemCA (Principal)
                  </button>
                  <button
                    onClick={() => setTenant('nova')}
                    className={`px-3 py-1.5 rounded font-mono text-xs transition-all ${
                      tenant === 'nova'
                        ? 'bg-[#00F0FF] text-[#0A0D14] font-bold shadow-md shadow-cyan-500/25'
                        : 'bg-[#131924] text-slate-300 border border-white/10 hover:border-cyan-500/30'
                    }`}
                  >
                    Tenant Beta (+ Nuevo)
                  </button>
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

          {activeTab === 'gamification' && (
            <div className="space-y-6">
              {/* Production App Live Banner */}
              <div className="p-4 rounded-lg bg-[#0F141C] border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-white">
                      APLICACIÓN EN PRODUCCIÓN:
                    </span>
                    <a
                      href="https://gamefication-objectives.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#00F0FF] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>https://gamefication-objectives.netlify.app</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    Plataforma de gamificación personal para seguimiento de hábitos y objetivos. Desarrollada con Next.js y base de datos relacional PostgreSQL en Supabase con Row Level Security (RLS) y sincronización reactiva.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://gamefication-objectives.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-bold text-xs font-mono shadow-md shadow-cyan-500/20"
                  >
                    Abrir App en Vivo ↗
                  </a>
                </div>
              </div>

              {/* Adventurer Level Progress Bar Card (matching image.png) */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#0A0E17] border border-white/8 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300 text-xl font-bold">
                      🧙‍♂️
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-white tracking-wide font-serif uppercase">
                          ADVENTURER
                        </span>
                        <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-400/40 text-[#00F0FF] text-[10px] font-mono font-semibold">
                          Level {level}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        {xp} total XP · {100 - xp} XP restantes para Level {level + 1}
                      </div>
                    </div>
                  </div>

                  <div className="text-left sm:text-right font-mono text-xs text-slate-400">
                    <span className="text-slate-300 font-semibold">{xp} / 100 XP</span>
                  </div>
                </div>

                {/* Level progress meter */}
                <div className="w-full h-2.5 rounded-full bg-[#131924] overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 transition-all duration-500 rounded-full"
                    style={{ width: `${Math.min(100, Math.max(5, xp))}%` }}
                  />
                </div>
              </div>

              {/* 4 Metric Cards (matching image.png) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-lg bg-[#0F141C] border border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>COMPLETED TODAY</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">
                    {gamificationGoals.filter((g) => g.completed).length}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0F141C] border border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>BEST STREAK</span>
                    <Flame className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">
                    {streak}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0F141C] border border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>ACTIVE</span>
                    <Target className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">
                    {gamificationGoals.filter((g) => !g.completed).length}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0F141C] border border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>COMPLETED</span>
                    <Trophy className="w-4 h-4 text-amber-300" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-200 font-mono">
                    {gamificationGoals.filter((g) => g.completed).length}
                  </div>
                </div>
              </div>

              {/* Quick Add Goal Form */}
              <form onSubmit={handleAddGoal} className="p-4 rounded-lg bg-[#0F141C] border border-white/8 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Agregar nuevo objetivo personal (ej. Leer 15 min, Meditar)..."
                  value={newGoalTitle}
                  onChange={(e) => setNewGoalTitle(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded bg-[#0A0D14] border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <select
                  value={newGoalType}
                  onChange={(e) => setNewGoalType(e.target.value as 'Daily' | 'One-time')}
                  className="px-3 py-2 rounded bg-[#0A0D14] border border-white/10 text-xs font-mono text-slate-300 focus:outline-none focus:border-cyan-400"
                >
                  <option value="Daily">Daily</option>
                  <option value="One-time">One-time</option>
                </select>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-bold text-xs font-mono flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ New goal</span>
                </button>
              </form>

              {/* Active Goals Grid */}
              <div className="rounded-lg bg-[#0A0D14] border border-white/8 p-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white uppercase">ACTIVE GOALS</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300 text-[10px]">
                      UNCATEGORIZED ({gamificationGoals.length})
                    </span>
                  </div>
                  <span className="text-cyan-400 text-[11px]">
                    Tip: Completa objetivos para ganar +10 XP y subir de nivel
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {gamificationGoals.map((goal) => (
                    <div
                      key={goal.id}
                      className={`p-3.5 rounded-lg border transition-all ${
                        goal.completed
                          ? 'bg-[#0E1520] border-emerald-500/40 opacity-75'
                          : 'bg-[#0F141C] border-white/5 hover:border-cyan-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                            {goal.type}
                          </span>
                          <span className="text-[10px] text-slate-500">? Uncategorized</span>
                        </div>
                        <span className="text-amber-400 font-bold font-mono text-[11px] flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          <span>+{goal.xp} XP</span>
                        </span>
                      </div>

                      <h5
                        className={`text-sm font-semibold mb-2 ${
                          goal.completed ? 'line-through text-slate-400' : 'text-white'
                        }`}
                      >
                        {goal.title}
                      </h5>

                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-mono">
                        <span className="text-slate-500 text-[11px]">
                          {goal.completed ? 'Completado hoy (1/1)' : 'Progreso: 0/1 (0%)'}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDeleteGoal(goal.id)}
                            className="p-1 rounded hover:bg-red-950/40 text-slate-500 hover:text-red-400 transition-colors"
                            title="Eliminar objetivo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleCompleteGoal(goal.id)}
                            disabled={goal.completed}
                            className={`px-3 py-1 rounded font-mono text-xs flex items-center gap-1 transition-all ${
                              goal.completed
                                ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 cursor-default'
                                : 'bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-bold shadow-md shadow-cyan-500/20'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                            <span>{goal.completed ? 'Completado' : '✓ Complete'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Architecture Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded bg-[#0F141C] border border-white/5">
                  <div className="text-slate-400 text-[10px] uppercase">Frontend & App Router</div>
                  <div className="text-white font-bold mt-1">Next.js 14 + Tailwind</div>
                </div>
                <div className="p-3 rounded bg-[#0F141C] border border-white/5">
                  <div className="text-slate-400 text-[10px] uppercase">Persistencia Relacional</div>
                  <div className="text-cyan-400 font-bold mt-1">PostgreSQL on Supabase</div>
                </div>
                <div className="p-3 rounded bg-[#0F141C] border border-white/5">
                  <div className="text-slate-400 text-[10px] uppercase">Aislamiento & Seguridad</div>
                  <div className="text-emerald-400 font-bold mt-1">Row Level Security (RLS)</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
