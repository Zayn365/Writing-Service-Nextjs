import { NextRequest, NextResponse } from "next/server";
import { signup, login, update, deleteUser } from "../models/Users";

export class UserController {
  async signup(req: NextRequest, res: NextResponse) {
    try {
      const user = await signup(req.body);
      res.status(201).json({ user });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  async login(req: NextRequest, res: NextResponse) {
    try {
      const { email, password } = req.body;
      const user = await login(email, password);
      res.status(200).json({ user });
    } catch (e: any) {
      res.status(401).json({ error: e.message });
    }
  }

  async update(req: NextRequest, res: NextResponse) {
    try {
      const id = req.query.id;
      const data = req.body;
      const user = await update(id, data);
      res.status(200).json({ user });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  async deleteUser(req: NextRequest, res: NextResponse) {
    try {
      const id = req.params.id;
      const result = await deleteUser(id);
      res.status(200).json(result);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }
}